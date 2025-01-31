'use client';

interface GetResponseFormProps {
  formId: string;
}

export const GetResponseForm: React.FC<GetResponseFormProps> = ({ formId }) => {
  return (
    <div
      className='grform min-h-[300px]'
      dangerouslySetInnerHTML={{
        __html: `
          <script type="text/javascript" src="<getresponse-form form-id="e067d61d-727f-4690-bb2d-507b24ed6184" e="1"></getresponse-form>"></script>
        `,
      }}
    />
  );
};
