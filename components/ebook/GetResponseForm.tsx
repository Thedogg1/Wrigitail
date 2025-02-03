'use client';
import { useEffect } from 'react';

interface GetResponseFormProps {
  formId: string;
}

export const GetResponseForm: React.FC<GetResponseFormProps> = ({ formId }) => {
  useEffect(() => {
    // Ensure script doesn't load multiple times
    const scriptId = `getresponse-script-${formId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://app.getresponse.com/view_webform_v2.js?u=your_user_id&webforms_id=${formId}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div id={`gr-form-${formId}`} className='min-h-[300px]' />;
};
