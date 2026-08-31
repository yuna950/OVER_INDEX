import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <div>
      <Helmet>
        <title>{`${title} | OVER.INDEX`}</title>
      </Helmet>
    </div>
  );
}
