// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: Ou_f7MnAVP
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantshKdOjWx6MiWhf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HKdOJWx6MIWhf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: akQUwPYY2eStENCEGYmmQw/projectcss
import sty from "./PlasmicTestimonialTop.module.css"; // plasmic-import: Ou_f7MnAVP/css

export const PlasmicTestimonialTop__VariantProps = new Array();

export const PlasmicTestimonialTop__ArgProps = new Array(
  "imageSrc",
  "name",
  "buyerLocation",
  "quoteText"
);

function PlasmicTestimonialTop__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshKdOjWx6MiWhf()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"quotation"}
        data-plasmic-override={overrides.quotation}
        className={classNames(projectcss.all, sty.quotation)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"”"}
        </div>
      </div>

      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"testimonialBottom"}
          data-plasmic-override={overrides.testimonialBottom}
          hasGap={true}
          className={classNames(projectcss.all, sty.testimonialBottom)}
        >
          <div
            data-plasmic-name={"testimonialText"}
            data-plasmic-override={overrides.testimonialText}
            className={classNames(projectcss.all, sty.testimonialText)}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "The folks at Horizon Development\nhelped me every step of the way in buying my first home. They negotiated on my behalf to lower the final buying price and I couldn’t be happier. I’d highly recommend their services to anyone looking to buy a home in New York.",
                value: args.quoteText,
                className: classNames(sty.slotTargetQuoteText)
              })}
            </div>
          </div>

          <div
            data-plasmic-name={"testimonialProfile"}
            data-plasmic-override={overrides.testimonialProfile}
            className={classNames(projectcss.all, sty.testimonialProfile)}
          >
            <div
              data-plasmic-name={"profileImg"}
              data-plasmic-override={overrides.profileImg}
              className={classNames(projectcss.all, sty.profileImg)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"profileInfo"}
              data-plasmic-override={overrides.profileInfo}
              hasGap={true}
              className={classNames(projectcss.all, sty.profileInfo)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Alan Lippi",
                value: args.name,
                className: classNames(sty.slotTargetName)
              })}

              {p.renderPlasmicSlot({
                defaultContents: "Home Buyer from Syosset",
                value: args.buyerLocation,
                className: classNames(sty.slotTargetBuyerLocation)
              })}
            </p.Stack>
          </div>
        </p.Stack>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "quotation",
    "text",
    "testimonialBottom",
    "testimonialText",
    "freeBox",
    "testimonialProfile",
    "profileImg",
    "profileInfo"
  ],

  quotation: ["quotation", "text"],
  text: ["text"],
  testimonialBottom: [
    "testimonialBottom",
    "testimonialText",
    "freeBox",
    "testimonialProfile",
    "profileImg",
    "profileInfo"
  ],

  testimonialText: ["testimonialText", "freeBox"],
  freeBox: ["freeBox"],
  testimonialProfile: ["testimonialProfile", "profileImg", "profileInfo"],
  profileImg: ["profileImg"],
  profileInfo: ["profileInfo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTestimonialTop__ArgProps,
      internalVariantPropNames: PlasmicTestimonialTop__VariantProps
    });

    return PlasmicTestimonialTop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialTop";
  } else {
    func.displayName = `PlasmicTestimonialTop.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialTop = Object.assign(
  // Top-level PlasmicTestimonialTop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    quotation: makeNodeComponent("quotation"),
    text: makeNodeComponent("text"),
    testimonialBottom: makeNodeComponent("testimonialBottom"),
    testimonialText: makeNodeComponent("testimonialText"),
    freeBox: makeNodeComponent("freeBox"),
    testimonialProfile: makeNodeComponent("testimonialProfile"),
    profileImg: makeNodeComponent("profileImg"),
    profileInfo: makeNodeComponent("profileInfo"),
    // Metadata about props expected for PlasmicTestimonialTop
    internalVariantProps: PlasmicTestimonialTop__VariantProps,
    internalArgProps: PlasmicTestimonialTop__ArgProps
  }
);

export default PlasmicTestimonialTop;
/* prettier-ignore-end */