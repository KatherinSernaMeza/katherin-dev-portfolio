export const loadSvgs = (requireContext: __WebpackModuleApi.RequireContext) => {
  const svgs: Record<string, any> = {};
  requireContext.keys().forEach((fileName) => {
    console.log(fileName)
    const componentName = fileName.replace('./', '').replace('.svg', '');
    console.log(fileName)
    svgs[componentName] = requireContext(fileName).default;
  });
  console.log(svgs)
  return svgs;
};