
const LineGradient = ({ width = "w-full" }) => {
  return (
    <div className={`h-0.5 ${width} bg-white`} />
  )
};

export default LineGradient;

// default prop {width = 'w-full'} will be override if another is passed on