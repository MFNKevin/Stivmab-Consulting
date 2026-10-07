import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { nom, email, telephone, pays, sujet, message } = await req.json();

        const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #0A1628; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
    <h2 style="color: #D4A84B; margin: 0; font-size: 22px;">Nouveau message de contact</h2>
    <p style="color: #ffffff80; margin: 4px 0 0; font-size: 13px;">StivMab Consulting</p>
  </div>
  <div style="background: #f9f9f9; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 120px;">Nom</td><td style="padding: 8px 0; font-size: 14px; color: #111; font-weight: bold;">${nom}</td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px; color: #111;"><a href="mailto:${email}" style="color: #D4A84B;">${email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Téléphone</td><td style="padding: 8px 0; font-size: 14px; color: #111;">${telephone || 'Non renseigné'}</td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Pays</td><td style="padding: 8px 0; font-size: 14px; color: #111;">${pays}</td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Sujet</td><td style="padding: 8px 0; font-size: 14px; color: #111;">${sujet}</td></tr>
    </table>
    <div style="margin-top: 20px; padding: 16px; background: #fff; border-left: 3px solid #D4A84B; border-radius: 4px;">
      <p style="margin: 0 0 8px; font-size: 13px; color: #666; font-weight: bold;">Message :</p>
      <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.6;">${message}</p>
    </div>
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
                to: ['support@stivmabconsulting.com'],
                reply_to: email,
                subject: `📩 Nouveau contact : ${nom} – ${sujet}`,
                html: htmlBody
            })
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Resend Error: ${errorData.message || res.statusText}`);
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});