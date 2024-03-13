const Swap = () => {
  return (
    <div className="container px-[66px] flex flex-col mt-20">
      <h2 className="font-bold text-5xl text-right">Swap</h2>
      <span className="font-semibold text-2xl text-[#00186C]/50 text-right">
        Swap at ease
      </span>
      <iframe
        src="https://widget.piteas.io/#/swap?inputCurrency=PLS&outputCurrency=0xee9082DaEA925Be8F79f1b2c457fC9470A104414&theme=light&exactField=input&exactAmount=1"
        height="728px"
        className="bg-white rounded-[50px] border-4 border-black mt-9 w-full"
      />
    </div>
  );
};

export default Swap;
