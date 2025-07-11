import React from "react";
import styled from "styled-components";

const PALETTE = [
  {
    name: "Black",
    colors: [
      "#111",
      "#222",
      "#333",
      "#444",
      "#666",
      "#888",
      "#aaa",
      "#ddd",
      "#fff",
    ],
  },
  {
    name: "Gray",
    colors: ["#222", "#444", "#666", "#888", "#aaa", "#ccc", "#eee", "#fff"],
  },
  {
    name: "Red",
    colors: [
      "#7B1F1F",
      "#B22222",
      "#E74C3C",
      "#FF7F7F",
      "#FFB3B3",
      "#FFE5E5",
      "#FFF5F5",
    ],
  },
  {
    name: "Orange",
    colors: ["#B35C00", "#FF8000", "#FFA500", "#FFC04D", "#FFD699", "#FFF2E0"],
  },
  {
    name: "Yellow",
    colors: ["#B39B00", "#FFD600", "#FFE066", "#FFF176", "#FFF9C4", "#FFFFF0"],
  },
  {
    name: "Lime",
    colors: ["#5B8C00", "#AEEA00", "#D4FC79", "#E9FFB3", "#F6FFED", "#FCFFF5"],
  },
  {
    name: "Green",
    colors: ["#145A32", "#229954", "#58D68D", "#82E0AA", "#B9F6CA", "#E8F8F5"],
  },
  {
    name: "Teal",
    colors: ["#00695C", "#26A69A", "#4DD0E1", "#80DEEA", "#B2EBF2", "#E0F7FA"],
  },
  {
    name: "Blue",
    colors: ["#154360", "#2874A6", "#3498DB", "#5DADE2", "#AED6F1", "#EAF6FB"],
  },
  {
    name: "Navy",
    colors: ["#1A237E", "#3949AB", "#5C6BC0", "#7986CB", "#C5CAE9", "#E8EAF6"],
  },
  {
    name: "Purple",
    colors: ["#4A148C", "#7C43BD", "#9B59B6", "#BA68C8", "#E1BEE7", "#F3E5F5"],
  },
  {
    name: "Violet",
    colors: ["#6A1B9A", "#8E24AA", "#AB47BC", "#CE93D8", "#E1BEE7", "#F8EAF6"],
  },
  {
    name: "Pink",
    colors: ["#AD1457", "#D81B60", "#EC407A", "#F06292", "#F8BBD0", "#FCE4EC"],
  },
  {
    name: "Brown",
    colors: ["#4E342E", "#795548", "#A1887F", "#D7CCC8", "#EFEBE9", "#FFF8E1"],
  },
  {
    name: "Beige",
    colors: ["#BFA980", "#E6D9B8", "#F8F6F2", "#FFF8E1", "#FFFBEA", "#FFFFFF"],
  },
];

const PaletteWrapper = styled.div`
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
  pointer-events: none;
  z-index: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.9rem;
  gap: 0.7rem;
  @media (max-width: 1024px) {
    margin-bottom: 0.8rem;
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
    gap: 0.3rem;
  }
`;

const ColorName = styled.div`
  width: 70px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.7rem;
  text-align: right;
  @media (max-width: 600px) {
    width: 48px;
    font-size: 0.8rem;
    margin-right: 0.3rem;
  }
`;

const Chip = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 0;
  border: 2px solid #222;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  @media (max-width: 1024px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
  }
`;

const ColorPalette = () => (
  <PaletteWrapper>
    {PALETTE.map((row, idx) => (
      <Row key={row.name}>
        <ColorName>{row.name}</ColorName>
        {row.colors.map((color, i) => (
          <Chip key={i} color={color} />
        ))}
      </Row>
    ))}
  </PaletteWrapper>
);

export default ColorPalette;
