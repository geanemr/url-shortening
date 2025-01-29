import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";

const InputContainer = () => {
  return (
    <section className="flex flex-wrap lg:flex-row items-center m-2 lg:m-0 p-8 lg:p-12 bg-no-repeat bg-right-top bg-primary-darkViolet bg-inputMobile lg:bg-inputDesktop rounded-md gap-4 mb-6 mt-2">
      <Input
        placeholder="Shorten a link here..."
        className="w-full md:w-auto truncate flex-grow p-3"
      />
      <Button
        variant="square-cyan"
        className="w-full md:w-auto truncate lg:break-normal flex-grow lg:flex-grow-0 p-3 lg:px-10"
      >
        Shorten It!
      </Button>
    </section>
  );
};

export default InputContainer;
