import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {statusCode
        ? `حدث خطأ ${statusCode} على الخادم`
        : 'حدث خطأ في جانب العميل'}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;