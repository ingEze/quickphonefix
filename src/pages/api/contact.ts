import type { APIRoute } from "astro"
import { Resend } from "resend"

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async({ request }) => {
   try {
        const body = await request.json()
        const { email, name, phone, message } = body
        
        const requiredFields: Record<string, string> = {
            email: 'Por favor ingresa tu email para que podamos responderte.',
            name: 'Necesitamos tu nombre para poder dirigirnos a ti correctamente.',
            phone: 'Indica tu número de teléfono para contactarte si es necesario.',
            message: 'Describe brevemente el problema que tienes con tu dispositivo para que podamos ayudarte mejor.',
        }

        for(const field in requiredFields) {
            if(!body[field as keyof typeof body]) {
                return new Response(
                    JSON.stringify({ message: requiredFields[field] }),
                    { status: 400 }
                )
            }
        }
            
        const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje - QuickPhoneFix</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);">
          
          <!-- Header compacto -->
          <tr>
            <td style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); padding: 24px 24px; text-align: left;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="vertical-align: middle;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                      📱 QuickPhoneFix
                    </h1>
                  </td>
                  <td style="text-align: right; vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); color: #ffffff; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                      Nuevo cliente
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px 24px;">
              
              <!-- Contacto rápido - Lo más importante primero -->
              <div style="margin-bottom: 24px;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="width: 50%; padding-right: 8px;">
                      <a href="tel:${phone}" style="display: block; background-color: #10b981; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 8px; text-align: center; font-weight: 600; font-size: 14px; box-shadow: 0 1px 2px rgba(16, 185, 129, 0.2);">
                        📞 Llamar ahora
                      </a>
                    </td>
                    <td style="width: 50%; padding-left: 8px;">
                      <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 8px; text-align: center; font-weight: 600; font-size: 14px; box-shadow: 0 1px 2px rgba(37, 211, 102, 0.2);">
                        💬 WhatsApp
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Datos del cliente - Compacto y escaneable -->
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px; border-left: 3px solid #06b6d4;">
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding-bottom: 12px;">
                      <span style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 4px;">
                        Cliente
                      </span>
                      <span style="color: #0f172a; font-size: 16px; font-weight: 700;">
                        ${name}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 12px;">
                      <span style="color: #64748b; font-size: 11px; display: block; margin-bottom: 4px;">
                        📧 Email
                      </span>
                      <a href="mailto:${email}" style="color: #06b6d4; font-size: 14px; font-weight: 500; text-decoration: none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="color: #64748b; font-size: 11px; display: block; margin-bottom: 4px;">
                        📱 Teléfono
                      </span>
                      <a href="tel:${phone}" style="color: #06b6d4; font-size: 14px; font-weight: 500; text-decoration: none;">
                        ${phone}
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Mensaje -->
              <div>
                <h3 style="margin: 0 0 12px 0; color: #0f172a; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                  Mensaje
                </h3>
                <div style="background-color: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                  <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${message}
                  </p>
                </div>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer minimalista -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="color: #94a3b8; font-size: 11px; line-height: 1.5;">
                    <strong style="color: #64748b; display: block; margin-bottom: 4px;">QuickPhoneFix</strong>
                    📍 San Lorenzo 2323, Moreno, Buenos Aires<br>
                    📞 +54 9 11 2338-0549
                  </td>
                  <td style="text-align: right; vertical-align: top;">
                    <span style="display: inline-block; background-color: #e2e8f0; color: #64748b; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: 600;">
                      Formulario Web
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: import.meta.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Nuevo mensaje de ${name} - QuickPhoneFix`,
            html
        })

        if(error) {
            console.error('Error de resend', error)
            return new Response(
                JSON.stringify({ error: error.message }),
                { status: 500 }
            )
        }

    return new Response(
        JSON.stringify({ ok: true, data }),
        { status: 200 }
    )
   } catch (err) {
        console.error('Error general:', err)
        return new Response(
        JSON.stringify({ error: 'Error interno' }),
        { status: 500 }
        )
    }
}