import { ComponentProps } from "react";

const SectionTitle = ({children, ...props}: ComponentProps<"p">) => {
    return (
        <p className='uppercase font-bold mb-3 pl-5' {...props}>{children}</p>
    );
}
 
export default SectionTitle;