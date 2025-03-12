interface SubheadProps {
  iconTotal: string;
}

const Subhead = ({ iconTotal }: SubheadProps) => (
  <div className="px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl my-8 font-bold">
        Reward Icons |
        <span className="ml-2 text-base font-normal">{iconTotal} Icons</span>
      </h2>
    </div>
  </div>
);

export default Subhead;
