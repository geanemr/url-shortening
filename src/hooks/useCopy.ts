interface useCopyInterface {
  handleCopy: (text: string) => void;
}
export const useCopy = (): useCopyInterface => {
  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCopy,
  };
};
