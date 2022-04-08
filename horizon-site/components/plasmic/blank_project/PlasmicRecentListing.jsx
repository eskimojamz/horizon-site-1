// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: w1_vCJeiHk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: akQUwPYY2eStENCEGYmmQw/projectcss
import sty from "./PlasmicRecentListing.module.css"; // plasmic-import: w1_vCJeiHk/css

export const PlasmicRecentListing__VariantProps = new Array();

export const PlasmicRecentListing__ArgProps = new Array(
  "price",
  "address",
  "details",
  "imageSrc",
  "recentListingImg"
);

function PlasmicRecentListing__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
        data-plasmic-name={"recentListingImgBlock"}
        data-plasmic-override={overrides.recentListingImgBlock}
        className={classNames(projectcss.all, sty.recentListingImgBlock)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___9Y9Zg)}
              displayHeight={"100%"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
            />
          ),

          value: args.recentListingImg
        })}
      </div>

      <div
        data-plasmic-name={"recentListingBottom"}
        data-plasmic-override={overrides.recentListingBottom}
        className={classNames(projectcss.all, sty.recentListingBottom)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"recentListingInfo"}
          data-plasmic-override={overrides.recentListingInfo}
          hasGap={true}
          className={classNames(projectcss.all, sty.recentListingInfo)}
        >
          <div
            data-plasmic-name={"price"}
            data-plasmic-override={overrides.price}
            className={classNames(projectcss.all, sty.price)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "$1,000,000",
              value: args.price,
              className: classNames(sty.slotTargetPrice)
            })}
          </div>

          <div
            data-plasmic-name={"address"}
            data-plasmic-override={overrides.address}
            className={classNames(projectcss.all, sty.address)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "50-50 Cloverdale Blvd, Bayside",
              value: args.address,
              className: classNames(sty.slotTargetAddress)
            })}
          </div>

          <div
            data-plasmic-name={"details"}
            data-plasmic-override={overrides.details}
            className={classNames(projectcss.all, sty.details)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "4 Beds / 2 Baths",
              value: args.details,
              className: classNames(sty.slotTargetDetails)
            })}
          </div>
        </p.Stack>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "recentListingImgBlock",
    "recentListingBottom",
    "recentListingInfo",
    "price",
    "address",
    "details"
  ],

  recentListingImgBlock: ["recentListingImgBlock"],
  recentListingBottom: [
    "recentListingBottom",
    "recentListingInfo",
    "price",
    "address",
    "details"
  ],

  recentListingInfo: ["recentListingInfo", "price", "address", "details"],
  price: ["price"],
  address: ["address"],
  details: ["details"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRecentListing__ArgProps,
      internalVariantPropNames: PlasmicRecentListing__VariantProps
    });

    return PlasmicRecentListing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRecentListing";
  } else {
    func.displayName = `PlasmicRecentListing.${nodeName}`;
  }
  return func;
}

export const PlasmicRecentListing = Object.assign(
  // Top-level PlasmicRecentListing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    recentListingImgBlock: makeNodeComponent("recentListingImgBlock"),
    recentListingBottom: makeNodeComponent("recentListingBottom"),
    recentListingInfo: makeNodeComponent("recentListingInfo"),
    price: makeNodeComponent("price"),
    address: makeNodeComponent("address"),
    details: makeNodeComponent("details"),
    // Metadata about props expected for PlasmicRecentListing
    internalVariantProps: PlasmicRecentListing__VariantProps,
    internalArgProps: PlasmicRecentListing__ArgProps
  }
);

export default PlasmicRecentListing;
/* prettier-ignore-end */
