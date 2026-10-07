import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { nom, email, sujet, lang = 'fr' } = await req.json();

        const texts = {
            fr: {
                subject: `✅ Votre message a bien été reçu – StivMab Consulting`,
                greeting: `Bonjour ${nom},`,
                body: `Nous avons bien reçu votre message concernant : <strong>${sujet}</strong>.<br><br>Notre équipe vous répondra dans les plus brefs délais (généralement sous 24-48h).<br><br>En attendant, n'hésitez pas à consulter nos services sur notre site.`,
                closing: `À très bientôt,`,
                team: `L'équipe StivMab Consulting`
            },
            en: {
                subject: `✅ Your message has been received – StivMab Consulting`,
                greeting: `Hello ${nom},`,
                body: `We have received your message regarding: <strong>${sujet}</strong>.<br><br>Our team will get back to you as soon as possible (usually within 24-48 hours).<br><br>In the meantime, feel free to browse our services on our website.`,
                closing: `See you soon,`,
                team: `The StivMab Consulting Team`
            },
            de: {
                subject: `✅ Ihre Nachricht wurde empfangen – StivMab Consulting`,
                greeting: `Hallo ${nom},`,
                body: `Wir haben Ihre Nachricht bezüglich: <strong>${sujet}</strong> erhalten.<br><br>Unser Team wird sich so schnell wie möglich bei Ihnen melden (in der Regel innerhalb von 24-48 Stunden).`,
                closing: `Bis bald,`,
                team: `Das StivMab Consulting Team`
            }
        };

        const t = texts[lang] || texts.fr;

        const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #0A1628; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
    <h2 style="color: #D4A84B; margin: 0; font-size: 22px;">StivMab Consulting</h2>
    <p style="color: #ffffff80; margin: 4px 0 0; font-size: 13px;">Ihr Partner für Erfolg in Deutschland</p>
  </div>
  <div style="background: #f9f9f9; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
    <p style="color: #111; font-size: 16px; margin-bottom: 16px;">${t.greeting}</p>
    <p style="color: #444; font-size: 14px; line-height: 1.7; margin-bottom: 20px;">${t.body}</p>
    <div style="margin: 24px 0; padding: 16px; background: #fff; border-left: 3px solid #D4A84B; border-radius: 4px;">
      <p style="margin: 0; font-size: 13px; color: #666;">📞 +49 152 13435560</p>
      <p style="margin: 4px 0 0; font-size: 13px; color: #666;">✉️ support@stivmabconsulting.com</p>
    </div>
    <p style="color: #555; font-size: 14px; margin-bottom: 4px;">${t.closing}</p>
    <p style="color: #0A1628; font-weight: bold; font-size: 14px;">${t.team}</p>
  </div>
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

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error sending confirmation:', error.message);
        return Response.json({ success: true }); // fail silently
    }
});