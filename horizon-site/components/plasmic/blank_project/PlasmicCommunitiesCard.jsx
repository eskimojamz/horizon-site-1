// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: vGOs3aFqqn
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: akQUwPYY2eStENCEGYmmQw/projectcss
import sty from "./PlasmicCommunitiesCard.module.css"; // plasmic-import: vGOs3aFqqn/css

export const PlasmicCommunitiesCard__VariantProps = new Array();

export const PlasmicCommunitiesCard__ArgProps = new Array(
  "imageSrc",
  "communitiesCardLabel"
);

function PlasmicCommunitiesCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
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
        data-plasmic-name={"communitiesCardLabel"}
        data-plasmic-override={overrides.communitiesCardLabel}
        className={classNames(projectcss.all, sty.communitiesCardLabel)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Queens",
          value: args.communitiesCardLabel,
          className: classNames(sty.slotTargetCommunitiesCardLabel)
        })}
      </div>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "communitiesCardLabel"],
  communitiesCardLabel: ["communitiesCardLabel"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCommunitiesCard__ArgProps,
      internalVariantPropNames: PlasmicCommunitiesCard__VariantProps
    });

    return PlasmicCommunitiesCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommunitiesCard";
  } else {
    func.displayName = `PlasmicCommunitiesCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCommunitiesCard = Object.assign(
  // Top-level PlasmicCommunitiesCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    communitiesCardLabel: makeNodeComponent("communitiesCardLabel"),
    // Metadata about props expected for PlasmicCommunitiesCard
    internalVariantProps: PlasmicCommunitiesCard__VariantProps,
    internalArgProps: PlasmicCommunitiesCard__ArgProps
  }
);

export default PlasmicCommunitiesCard;
/* prettier-ignore-end */
