type HeaderSectionProps = {
  title?: string;
  description?: string;
};

export const HeaderSection = (props: HeaderSectionProps) => {
  const { title, description } = props;

  return (
    <div className=" py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </div>
  );
};
