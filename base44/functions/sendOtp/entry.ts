import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { email, lang = 'fr' } = await req.json();
        
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        const texts = {
            fr: { subject: 'Code de vérification - StivMab Consulting', body: `Votre code de vérification est : <b>${otp}</b>`, note: "Ce code est nécessaire pour valider votre demande de contact." },
            en: { subject: 'Verification code - StivMab Consulting', body: `Your verification code is : <b>${otp}</b>`, note: "This code is necessary to validate your contact request." },
            de: { subject: 'Bestätigungscode - StivMab Consulting', body: `Ihr Bestätigungscode lautet : <b>${otp}</b>`, note: "Dieser Code ist erforderlich, um Ihre Kontaktanfrage zu bestätigen." }
        };
        
        const t = texts[lang] || texts.fr;

        const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 28px; border-radius: 8px; text-align: center;">
    <h2 style="color: #0A1628;">StivMab Consulting</h2>
    <p style="color: #444; font-size: 16px; margin-bottom: 20px;">${t.body}</p>
    <p style="color: #666; font-size: 14px;">${t.note}</p>
</div>`;

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'StivMab Consulting <support@stivmabconsulting.com>',
                to: [email],
                subject: t.subject,
                html: htmlBody
            })
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Resend Error: ${errorData.message || res.statusText}`);
        }

        return Response.json({ success: true, otp });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});