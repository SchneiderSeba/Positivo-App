

export function homePage() {
    return `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend de Notificaciones | Panel de Control</title>
    <meta name="description" content="Sistema de notificaciones push en tiempo real para pedidos">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; min-height: 100vh; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); color: #e2e8f0; overflow-x: hidden; position: relative;">

    <!-- Orbes flotantes animados -->
    <div style="position: fixed; width: 400px; height: 400px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); filter: blur(80px); opacity: 0.3; top: -100px; left: -100px; z-index: 0; animation: float1 20s ease-in-out infinite;"></div>
    <div style="position: fixed; width: 300px; height: 300px; border-radius: 50%; background: linear-gradient(135deg, #06b6d4, #3b82f6); filter: blur(80px); opacity: 0.3; bottom: -50px; right: -50px; z-index: 0; animation: float2 25s ease-in-out infinite;"></div>
    <div style="position: fixed; width: 200px; height: 200px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #ec4899); filter: blur(80px); opacity: 0.25; top: 40%; left: 60%; z-index: 0; animation: float3 18s ease-in-out infinite;"></div>

    <style>
        @keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(40px, 30px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, -40px); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -20px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.4); } 50% { box-shadow: 0 25px 50px -10px rgba(139, 92, 246, 0.5); } }
        .card:hover { transform: translateY(-4px); border-color: rgba(59, 130, 246, 0.4) !important; box-shadow: 0 20px 40px -20px rgba(59, 130, 246, 0.4); }
        .tech-badge:hover { background: rgba(59, 130, 246, 0.15) !important; border-color: rgba(59, 130, 246, 0.4) !important; }
    </style>

    <!-- Contenedor principal -->
    <div style="max-width: 900px; margin: 0 auto; padding: 60px 24px; position: relative; z-index: 1;">

        <!-- Header -->
        <header style="text-align: center; margin-bottom: 60px;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 100px; height: 100px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%); border-radius: 28px; margin-bottom: 28px; box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1); animation: glow 3s ease-in-out infinite;">
                <span style="font-size: 48px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">🔔</span>
            </div>
            <h1 style="font-size: 3rem; font-weight: 800; background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0 0 16px 0; letter-spacing: -0.02em;">Notification Backend</h1>
            <p style="font-size: 1.25rem; color: #94a3b8; max-width: 500px; margin: 0 auto; line-height: 1.7;">
                Sistema inteligente de <span style="color: #3b82f6; font-weight: 600;">notificaciones push</span> en tiempo real para gestión automatizada de pedidos
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80; padding: 8px 16px; border-radius: 100px; font-size: 0.875rem; font-weight: 500; margin-top: 24px;">
                <span style="width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: pulse 2s ease-in-out infinite;"></span>
                Sistema Operativo
            </div>
        </header>

        <!-- Cards Grid -->
        <div style="display: grid; gap: 24px; margin-bottom: 40px;">

            <!-- Card 1: Cómo Funciona -->
            <div class="card" style="background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 14px; font-size: 24px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));">⚡</div>
                    <h2 style="font-size: 1.25rem; font-weight: 700; color: #f1f5f9; margin: 0; letter-spacing: -0.01em;">¿Cómo Funciona?</h2>
                </div>
                <div style="color: #94a3b8; line-height: 1.8;">
                    <ol style="margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 12px;">Se conecta a <strong style="color: #f1f5f9;">Supabase</strong> mediante Realtime y escucha eventos en la tabla <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">orders</code></li>
                        <li style="margin-bottom: 12px;">Al detectar un nuevo pedido (<code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">INSERT</code>), genera automáticamente una notificación personalizada</li>
                        <li style="margin-bottom: 0;">Envía la notificación push utilizando <strong style="color: #f1f5f9;">Expo Push Notifications</strong></li>
                    </ol>
                </div>
            </div>

            <!-- Card 2: Endpoints -->
            <div class="card" style="background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 14px; font-size: 24px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1));">🌐</div>
                    <h2 style="font-size: 1.25rem; font-weight: 700; color: #f1f5f9; margin: 0; letter-spacing: -0.01em;">Endpoints Disponibles</h2>
                </div>
                <div style="color: #94a3b8; line-height: 1.7;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <span style="padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; font-family: 'JetBrains Mono', monospace; background: rgba(34, 197, 94, 0.2); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3);">GET</span>
                        <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">/</code>
                    </div>
                    <p style="color: #64748b; font-size: 0.9rem; margin: 0 0 16px 0;">Muestra esta página informativa del sistema</p>

                    <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); margin: 16px 0;"></div>

                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <span style="padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3);">POST</span>
                        <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">/send-notification</code>
                    </div>
                    <p style="color: #64748b; font-size: 0.9rem; margin: 0 0 12px 0;">Envía una notificación push manualmente</p>
                    <pre style="font-family: 'JetBrains Mono', monospace; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px 20px; font-size: 0.85rem; color: #e2e8f0; margin: 0; overflow-x: auto; white-space: pre-wrap;">{
  "to": "ExpoPushToken[xxxxx]",
  "title": "Nuevo Pedido",
  "body": "Tienes un nuevo pedido #1234",
  "data": { "orderId": "1234", "type": "new_order" }
}</pre>
                </div>
            </div>

            <!-- Card 3: Listeners -->
            <div class="card" style="background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 14px; font-size: 24px; background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));">📡</div>
                    <h2 style="font-size: 1.25rem; font-weight: 700; color: #f1f5f9; margin: 0; letter-spacing: -0.01em;">Listeners Activos</h2>
                </div>
                <div style="color: #94a3b8; line-height: 1.8;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 12px;"><strong style="color: #f1f5f9;">Pedidos Nuevos:</strong> Escucha eventos <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">INSERT</code> en tabla <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">orders</code></li>
                        <li style="margin-bottom: 12px;"><strong style="color: #f1f5f9;">Handler:</strong> <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2);">./sendNotificationFromBack.js</code></li>
                        <li style="margin-bottom: 0;"><strong style="color: #f1f5f9;">Modo:</strong> Notificaciones automáticas en tiempo real</li>
                    </ul>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px;">
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 16px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #f1f5f9; margin-bottom: 4px;">24/7</div>
                            <div style="font-size: 0.8rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Uptime</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 16px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #f1f5f9; margin-bottom: 4px;">&lt;100ms</div>
                            <div style="font-size: 0.8rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Latencia</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 16px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #f1f5f9; margin-bottom: 4px;">∞</div>
                            <div style="font-size: 0.8rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Escalable</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 4: Variables de Entorno -->
            <div class="card" style="background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 14px; font-size: 24px; background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1));">🔐</div>
                    <h2 style="font-size: 1.25rem; font-weight: 700; color: #f1f5f9; margin: 0; letter-spacing: -0.01em;">Variables de Entorno</h2>
                </div>
                <div style="color: #94a3b8; line-height: 1.8;">
                    <ul style="margin: 0; padding-left: 20px; list-style: none;">
                        <li style="margin-bottom: 16px; padding-left: 0;">
                            <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2); display: inline-block; margin-bottom: 4px;">PUBLIC_SUPABASE_URL</code><br>
                            <span style="color: #64748b; font-size: 0.9rem;">URL de tu proyecto Supabase</span>
                        </li>
                        <li style="margin-bottom: 16px; padding-left: 0;">
                            <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2); display: inline-block; margin-bottom: 4px;">PUBLIC_SUPABASE_ANON_KEY</code><br>
                            <span style="color: #64748b; font-size: 0.9rem;">Clave anónima para conexiones cliente</span>
                        </li>
                        <li style="margin-bottom: 0; padding-left: 0;">
                            <code style="font-family: 'JetBrains Mono', monospace; background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 6px; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2); display: inline-block; margin-bottom: 4px;">EXPO_PUSH_TOKEN</code><br>
                            <span style="color: #64748b; font-size: 0.9rem;">Token de acceso para Expo Push Notifications</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Card 5: Tech Stack -->
            <div class="card" style="background: rgba(30, 41, 59, 0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s ease; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                    <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 14px; font-size: 24px; background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1));">🛠️</div>
                    <h2 style="font-size: 1.25rem; font-weight: 700; color: #f1f5f9; margin: 0; letter-spacing: -0.01em;">Stack Tecnológico</h2>
                </div>
                <div style="color: #94a3b8; line-height: 1.7;">
                    <p style="margin: 0 0 16px 0;">Construido con tecnologías modernas y escalables:</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">⚡ Node.js</span>
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">🗄️ Supabase</span>
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">📱 Expo</span>
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">🔄 Realtime</span>
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">🚀 Express</span>
                        <span class="tech-badge" style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 14px; border-radius: 100px; font-size: 0.85rem; color: #cbd5e1; transition: all 0.2s ease; cursor: default;">📡 WebSockets</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- Footer -->
        <footer style="text-align: center; padding: 40px 0; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 40px;">
            <p style="color: #64748b; font-size: 0.9rem; margin: 0 0 16px 0;">
                © 2025 Notification Backend · Desarrollado por <span style="color: #94a3b8; font-weight: 600;">Sebastian Schneider</span>
            </p>
            <div style="display: flex; justify-content: center; gap: 24px;">
                <a href="#" style="color: #64748b; text-decoration: none; font-size: 0.875rem; transition: color 0.2s ease;">Documentación</a>
                <a href="#" style="color: #64748b; text-decoration: none; font-size: 0.875rem; transition: color 0.2s ease;">GitHub</a>
                <a href="#" style="color: #64748b; text-decoration: none; font-size: 0.875rem; transition: color 0.2s ease;">Contacto</a>
            </div>
        </footer>

    </div>

</body>
</html>
    `;
}

export function homePageTow() {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Control Center | Backend de Notificaciones</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary: #007aff;
                --primary-dark: #0056b3;
                --bg: #f8fafc;
                --card: #ffffff;
                --text-main: #1e293b;
                --text-muted: #64748b;
                --accent: #e0f2fe;
                --code-bg: #f1f5f9;
                --border: #e2e8f0;
            }

            * { box-sizing: border-box; }

            body {
                font-family: 'Plus Jakarta Sans', sans-serif;
                background-color: var(--bg);
                background-image: 
                    radial-gradient(at 0% 0%, rgba(0, 122, 255, 0.05) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(0, 122, 255, 0.05) 0px, transparent 50%);
                margin: 0;
                padding: 0;
                color: var(--text-main);
                line-height: 1.6;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .container {
                max-width: 800px;
                width: 92%;
                margin: 40px auto;
                background: var(--card);
                border-radius: 24px;
                border: 1px solid var(--border);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
                padding: 50px;
                position: relative;
                overflow: hidden;
            }

            /* Decoración superior */
            .top-bar {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 6px;
                background: linear-gradient(90deg, var(--primary), #60a5fa);
            }

            .header {
                text-align: center;
                margin-bottom: 40px;
            }

            .icon-wrapper {
                width: 70px;
                height: 70px;
                background: var(--accent);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                font-size: 32px;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 122, 255, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 122, 255, 0); }
            }

            h1 {
                font-weight: 800;
                font-size: 2.5rem;
                margin: 0;
                letter-spacing: -1px;
                background: linear-gradient(to right, var(--text-main), var(--primary));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .subtitle {
                color: var(--text-muted);
                font-size: 1.1rem;
                max-width: 500px;
                margin: 10px auto 0;
            }

            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                margin-top: 20px;
            }

            section {
                padding: 24px;
                background: #fafafa;
                border-radius: 16px;
                border: 1px solid var(--border);
                transition: transform 0.2s ease;
            }

            section:hover {
                transform: translateY(-2px);
                border-color: var(--primary);
            }

            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--primary);
                margin-top: 0;
                margin-bottom: 16px;
            }

            ul, ol {
                margin: 0;
                padding-left: 20px;
                color: var(--text-muted);
                font-size: 0.95rem;
            }

            li { margin-bottom: 8px; }

            .code-block {
                display: block;
                font-family: 'JetBrains Mono', monospace;
                background: var(--text-main);
                color: #e2e8f0;
                padding: 12px 16px;
                border-radius: 10px;
                font-size: 0.85rem;
                margin: 10px 0;
                overflow-x: auto;
            }

            .badge {
                display: inline-block;
                padding: 2px 8px;
                background: var(--accent);
                color: var(--primary);
                border-radius: 6px;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.8rem;
                font-weight: 600;
            }

            .status-dot {
                height: 8px;
                width: 8px;
                background-color: #22c55e;
                border-radius: 50%;
                display: inline-block;
                margin-right: 5px;
            }

            .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid var(--border);
                text-align: center;
                color: var(--text-muted);
                font-size: 0.85rem;
            }

            .signature {
                font-weight: 600;
                color: var(--text-main);
            }

            @media (max-width: 768px) {
                .grid { grid-template-columns: 1fr; }
                .container { padding: 30px 20px; }
                h1 { font-size: 1.8rem; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="top-bar"></div>
            
            <header class="header">
                <div class="icon-wrapper">🔔</div>
                <h1>Notification Hub</h1>
                <p class="subtitle">Infraestructura escalable para el procesamiento y envío de alertas en tiempo real.</p>
            </header>

            <div class="grid">
                <section>
                    <h2><span>⚙️</span> Core Engine</h2>
                    <p style="font-size: 0.9rem; margin-top: 0;">Monitorización activa de base de datos:</p>
                    <ul>
                        <li><span class="status-dot"></span> <b>Realtime:</b> Escuchando eventos <span class="badge">INSERT</span></li>
                        <li><b>Data Source:</b> Supabase <span class="badge">orders</span> table</li>
                        <li><b>Provider:</b> Expo Push Notification Service</li>
                    </ul>
                </section>

                <section>
                    <h2><span>🚀</span> API Endpoints</h2>
                    <div style="margin-bottom: 15px;">
                        <span class="badge">GET</span> <small>/</small>
                        <p style="font-size: 0.8rem; margin: 4px 0 10px;">Interfaz de documentación actual.</p>
                    </div>
                    <div>
                        <span class="badge" style="background: #fef3c7; color: #d97706;">POST</span> <small>/send-notification</small>
                        <code class="code-block">{
  "to": "Token",
  "title": "...",
  "body": "..."
}</code>
                    </div>
                </section>

                <section>
                    <h2><span>📂</span> System Path</h2>
                    <p style="font-size: 0.9rem; margin-top: 0;">Script de ejecución lógica:</p>
                    <code class="code-block">./sendNotificationFromBack.js</code>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Maneja el ciclo de vida de la notificación desde el backend.</p>
                </section>

                <section>
                    <h2><span>🔑</span> Environment</h2>
                    <ul style="list-style: none; padding-left: 0;">
                        <li>🛡️ <span class="badge">SUPABASE_URL</span></li>
                        <li>🛡️ <span class="badge">SUPABASE_ANON_KEY</span></li>
                        <li>📱 <span class="badge">EXPO_PUSH_TOKEN</span></li>
                    </ul>
                </section>
            </div>

            <footer class="footer">
                &copy; 2025 Enterprise Notification Engine <br> 
                Diseñado y desarrollado por <span class="signature">Sebastian Schneider</span>
            </footer>
        </div>
    </body>
    </html>
    `;
}