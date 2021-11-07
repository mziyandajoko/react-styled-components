import  styled  from "styled-components";

export const Flex = Style.div`
    display: flex;
    align-itmes: center;

    & > div,
    & > ul {
        flex: 1;
    }

`