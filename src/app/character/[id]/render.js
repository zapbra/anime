"use client";
import React from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";

const Cont = styled.div``;

const Render = ({ data }) => {
    console.log(data);
    return <Cont colors={COLORS}></Cont>;
};

export default Render;
