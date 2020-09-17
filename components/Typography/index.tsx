import clsx from "clsx";
import React, { Fragment } from "react";
import filterProps from "../../lib/filter-props";

const variants = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s7",
  //GUI*****//
  "text-input-hint",
  "text-body",
  "text-input-medium",
  "text-input-big",
  "title-jumbo",
  "title-section",
  "title-big",
  "title-medium",
  "title-small",
  "title-micro",
  "number-small",
  "number-medium",
  "number-big",
  "number-jumbo",
  "number-secret",
];

type TypographyVariant =
  | "s1"
  | "s2"
  | "s3"
  | "s4"
  | "s5"
  | "s6"
  | "s7"
  //GUI*****//
  | "text-input-hint"
  | "text-body"
  | "text-input-medium"
  | "text-input-big"
  | "title-jumbo"
  | "title-section"
  | "title-big"
  | "title-medium"
  | "title-small"
  | "title-micro"
  | "number-small"
  | "number-medium"
  | "number-big"
  | "number-jumbo"
  | "number-secret";

type TypographyCap =
  | "inherit"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "first-letter";

export interface TypographyProps {
  /** Es el elemento HTML o componente que va a renderizar con los estilos de un Button */
  element?: any;
  /** Es una variable que contiene los componentes hijos */
  children?: any;
  /** Classes aplicadas al componente */
  className?: string;
  /** Es la variante del componente: title-jumbo, title-section, title-big */
  variant?: TypographyVariant;
  /** Para especificar un tamaño de tipografía */
  size?: string;
  /** Para especificar alineación del texto */
  align?: "left" | "center " | "right" | "justify";
  /** Para especificar un color de fuente 'grey_text_dark' | 'grey_text_light ' */
  color?: string;
  /** Para especificar un grosor de fuente */
  weight?: string;
  /** Para especificar Capitalizar */
  capitalize?: boolean;
  /** Para especificar en mayúscula */
  uppercase?: boolean;
  /** Activamos o no el quiebre de palabras entre sus espacios en blanco (white-space: nowrap) */
  wrap?: boolean;
  /** Es el tema que le provee los datos para generar los estilos */
  theme?: any;
  /** Definimos el tipo de alineación del contenido*/
  inline?: boolean;
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  element: TextElement = "p",
  variant = "s1",
  color = "grey_text_dark",
  inline = false,
  weight = "normal",
  align,
  size,
  capitalize,
  uppercase,
  wrap,
  theme,
  className,
  children,
  ...rest
}) => {
  const hasVariant = variants.find((v) => v === variant);

  if (!hasVariant) {
    return null;
  }

  const classes = clsx({
    "typography-base": true,
    [`${variant}`]: !!variant,
    [`align-${align}`]: !!align,
    "-wrap": !!wrap,
    "-inline": !!inline,
    "-capitalize": !!capitalize,
    "-uppercase": !!uppercase,
    [className]: !!className,
  });
  return (
    <Fragment>
      <TextElement {...filterProps(rest)} className={classes}>
        {children}
      </TextElement>

      <style jsx>{`
        .typography-base {
          font-family: ${
            !!theme.typography.variants[variant].fontFamily
              ? theme.typography.variants[variant].fontFamily
              : theme.typography.fontFamily.interRegular
          };

          letter-spacing: ${theme.typography.fontletterSpacing};
          color: ${
            variant == "s6" ? theme.colors.primary : theme.colors[color]
          };
          font-weight: ${theme.typography.weight[weight]};
          font-size: ${theme.typography.variants[variant].fontSize};
          line-height: ${theme.typography.variants[variant].lineHeight};
        }

        .typography-base :global(b, strong) {
          font-family: //${theme.typography.fontFamily.interBold};
          font-weight: "normal";
        }

        .typography-base.-inline {
          display: inline-block;
        }

        .typography-base.-inline {
          display: inline-block;
        }

        .typography-base.-wrap {
          white-space: nowrap;
        }

        .typography-base.-cap-first-letter::first-letter {
          text-transform: capitalize;
        }

        .typography-base.-capitalize::first-letter {
          text-transform: capitalize;
        }

        .typography-base.-uppercase {
          text-transform: uppercase;
        }

        . .typography-base.align-center {
          text-align: center;
        }
        .typography-base.align-justify {
          text-align: justify;
        }
        .typography-base.align-right {
          text-align: right;
        }

        :global(a) {
          cursor: pointer;
        }

        .typography-base--fl::first-letter {
          text-transform: capitalize;
        }

        @media screen and (max-width: ${theme.breakpoints.sm}) {
          .typography-base {
            font-size: ${theme.typography.variants[variant].mobile.fontSize};
            line-height: ${
              theme.typography.variants[variant].mobile.lineHeight
            };
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Typography;
