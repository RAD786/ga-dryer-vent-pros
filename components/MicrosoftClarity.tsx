import Script from "next/script";

type MicrosoftClarityProps = {
  projectId?: string;
};

function claritySnippet(projectId: string) {
  const encodedProjectId = JSON.stringify(projectId);

  return `
    (function(c,l,a,r,i,t,y){
      if (c[a]) return;
      c[a]=function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", ${encodedProjectId});
  `;
}

export function MicrosoftClarity({
  projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
}: MicrosoftClarityProps) {
  const clarityProjectId = projectId?.trim();
  const shouldLoadClarity = process.env.NODE_ENV === "production" && clarityProjectId;

  if (!shouldLoadClarity) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: claritySnippet(clarityProjectId) }}
    />
  );
}
