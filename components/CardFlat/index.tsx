import { useState, useEffect } from "react";
import clsx from "clsx";
import filterProps from "../../lib/filter-props";
import Typography from "../Typography";

export interface CardFlatProps {
  /** Classes aplicadas al componente */
  className?: string;
  /** Es una variable que contiene los componentes hijos */
  children?: any;
  /** Titulo de la card */
  title?: string;
  /** Descripcion de la card */
  description?: string;
  /** Imagen de la Card */
  imageURL?: string;
  /** Es el elemento HTML o componente que va a renderizar los Botones */
  buttonListFooter?: any;
  /** lista de opciones */
  listDropdown?: any;
  /** Accion que se genera al hacer click en la card */
  onClick?: any;
  /** si existe un Avatar */
  hasAvatar?: Boolean;
  /** Texto del Avatar*/
  avatarText?: string;
  /** Imagen del Avatar */
  avatarImg?: string;
}

const CardFlat: React.FunctionComponent<CardFlatProps> = ({
  className,
  title,
  description = "ACA VA LA CUENTA DEL USUARIO",
  children,
  imageURL,
  buttonListFooter,
  listDropdown,
  onClick,
  hasAvatar = false,
  avatarText,
  avatarImg,
  ...rest
}) => {
  const classes = clsx({
    "card mb-16 px-16 pt-24 ": true,
    "pb-8": !!buttonListFooter,
    "pb-24": !buttonListFooter,
    [className]: !!className,
  });
  return (
    <>
      <div onClick={onClick} className={classes} {...filterProps(rest)}>
        <div className="card-content">
          {!!description && (
            <div className="card-body mt-8">
              <Typography element="p" variant="s5" color="grey_text_light">
                {description}
              </Typography>
            </div>
          )}
          {children}
          CardFlat
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
          transition: box-shadow 0.3s ease-in-out;
          cursor: pointer;
          display: flex;
          flex-direction: row;
        }

        .card:hover {
          box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
        }
        .card-header {
          display: flex;
          align-items: center;
        }

        .card-dropdown {
          position: absolute;
          top: 4px;
          right: 12px;
        }

        .card-avatar {
          display: flex;
          margin-right: 16px;
          width: 48px;
        }

        .card-content {
          display: flex;
          flex-direction: column;
        }

        .card-image {
          margin-left: -16px;
          margin-right: -16px;
        }

        .card-image img {
          width: 100%;
        }
        .card-footer :global(button:first-child) {
          margin-left: -12px;
        }
      `}</style>
    </>
  );
};

export default CardFlat;
