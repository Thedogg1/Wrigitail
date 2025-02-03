'use client';
import { useEffect, useRef, useState } from 'react';

interface GetResponseFormProps {
  formId: string;
}

export const GetResponseForm: React.FC<GetResponseFormProps> = ({ formId }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://app.getresponse.com/view_webform_v2.js?u=terry@wrigitail.com&webforms_id=${formId}`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [formId]);

  if (!isMounted) return null;

  return (
    <div
      className='w-full min-h-[400px]'
      dangerouslySetInnerHTML={{
        __html: `
          <div class="gr-form-wrapper">
            <div class="gr_${formId} gr-form-container"></div>
          </div>
        `,
      }}
    />
  );
};
