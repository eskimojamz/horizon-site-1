// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: j7fyymFTtU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import RecentListing from "../../RecentListing"; // plasmic-import: w1_vCJeiHk/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: akQUwPYY2eStENCEGYmmQw/projectcss
import sty from "./PlasmicRecentListingsBlock.module.css"; // plasmic-import: j7fyymFTtU/css

export const PlasmicRecentListingsBlock__VariantProps = new Array();

export const PlasmicRecentListingsBlock__ArgProps = new Array("children");

function PlasmicRecentListingsBlock__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <RecentListing
            className={classNames("__wab_instance", sty.recentListing__kYcOc)}
          />
        ),

        value: args.children
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRecentListingsBlock__ArgProps,
      internalVariantPropNames: PlasmicRecentListingsBlock__VariantProps
    });

    return PlasmicRecentListingsBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRecentListingsBlock";
  } else {
    func.displayName = `PlasmicRecentListingsBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicRecentListingsBlock = Object.assign(
  // Top-level PlasmicRecentListingsBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRecentListingsBlock
    internalVariantProps: PlasmicRecentListingsBlock__VariantProps,
    internalArgProps: PlasmicRecentListingsBlock__ArgProps
  }
);

export default PlasmicRecentListingsBlock;
/* prettier-ignore-end */
