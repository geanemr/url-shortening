import { useUrlStore } from "../../../stores/urlStore";

const UrlsList = () => {
  const { urls } = useUrlStore();
  const sortedUrls = urls.sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <section>
      <ul>
        {sortedUrls.length > 0
          ? urls.map((url) => (
              <li key={url.id}>
                <span>{url.url}</span>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default UrlsList;
