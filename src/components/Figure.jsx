export default function Figure({ src, caption, alt }) {
  return (
    <div className="figure-wrap">
      <img src={src} alt={alt || caption} loading="lazy" />
      {caption && <p className="figure-caption">{caption}</p>}
    </div>
  );
}
