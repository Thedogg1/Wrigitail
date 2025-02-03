// components/ebook/GetResponseForm.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

interface GetResponseFormProps {
  formId: string;
  containerId?: string;
}

export const GetResponseForm: React.FC<GetResponseFormProps> = ({
  formId,
  containerId = `gr_${formId}`,
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentRef = formRef.current;
    const formContainer = document.createElement('div');
    formContainer.id = containerId;

    if (currentRef) {
      currentRef.appendChild(formContainer);
    }

    const script = document.createElement('script');
    script.innerHTML = `
      (function() {
        window.gr_form = window.gr_form || {};
        window.gr_form["${formId}"] = {
          id: "${formId}",
          settings: {
            "lightbox": 0,
            "placeholder": "${containerId}",
            "center": 0
          }
        };
        var s = document.createElement('script');
        s.src = "https://app.getresponse.com/view_webform_v2.js?u='your.email@domain.com'&webforms_id=${formId}";
        s.async = true;
        document.body.appendChild(s);
      })();
    `;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (currentRef?.contains(formContainer)) {
        currentRef.removeChild(formContainer);
      }
    };
  }, [formId, containerId, isMounted]);

  if (!isMounted) {
    return (
      <div className='w-full min-h-[400px] flex items-center justify-center' />
    );
  }

  return (
    <div
      ref={formRef}
      className='w-full min-h-[400px] flex items-center justify-center'
      aria-label='Newsletter signup form'
    />
  );
};
