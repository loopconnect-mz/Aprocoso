import { PortableText as PortableTextReact } from '@portabletext/react';
import { urlFor } from '../lib/sanity';

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).auto('format').fit('max').width(800).url()}
          className="rounded-lg my-8 w-full max-w-3xl mx-auto"
        />
      );
    },
  },
};

export default function PortableText({ value }: { value: any }) {
  return (
    <div className="prose prose-lg md:prose-xl text-gray-700 max-w-none prose-headings:text-primary-dark prose-a:text-primary hover:prose-a:text-primary-light">
      <PortableTextReact value={value} components={components} />
    </div>
  );
}
