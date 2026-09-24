"use client";

import Script from "next/script";
import { useConsentimento } from "@/lib/useConsentimento";

/**
 * GA4 e Meta Pixel. Nada é carregado antes do "Aceitar" do aviso de cookies,
 * e nada é carregado sem os IDs em variável de ambiente (⏳ PENDENTES).
 *
 * O Consent Mode v2 entra com tudo negado no primeiro comando do gtag e só
 * então é atualizado para concedido — a ordem importa para o Google.
 */
export function Medicao({ ga4, metaPixel }: { ga4: string | null; metaPixel: string | null }) {
  if (useConsentimento() !== "aceito") return null;

  return (
    <>
      {ga4 && (
        <>
          <Script
            id="ga4-carregador"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
          />
          <Script id="ga4-configuracao" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${ga4}');
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
            `}
          </Script>
        </>
      )}

      {metaPixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixel}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
