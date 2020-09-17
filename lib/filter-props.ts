type FilterPropsFunction = (props: any) => any;

const filterProps: FilterPropsFunction = ({ cdnBasepath, theme, ...rest }) =>
  rest;

export default filterProps;
