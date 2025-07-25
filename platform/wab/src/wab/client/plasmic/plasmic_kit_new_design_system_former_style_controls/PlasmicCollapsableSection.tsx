/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: OW_7AtJANr

import * as React from "react";

import {
  get as $stateGet,
  set as $stateSet,
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import ListSectionSeparator from "../../components/ListSectionSeparator"; // plasmic-import: uG5_fPM0sK/component
import SectionCollapseButton from "../../components/widgets/SectionCollapseButton"; // plasmic-import: 8AZoGEGjWc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicCollapsableSection.module.css"; // plasmic-import: OW_7AtJANr/css

createPlasmicElementProxy;

export type PlasmicCollapsableSection__VariantMembers = {
  isExpanded: "isExpanded";
};
export type PlasmicCollapsableSection__VariantsArgs = {
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
};
type VariantPropType = keyof PlasmicCollapsableSection__VariantsArgs;
export const PlasmicCollapsableSection__VariantProps =
  new Array<VariantPropType>("isExpanded");

export type PlasmicCollapsableSection__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCollapsableSection__ArgsType;
export const PlasmicCollapsableSection__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicCollapsableSection__OverridesType = {
  root?: Flex__<"div">;
  sectionCollapseButton?: Flex__<typeof SectionCollapseButton>;
  contentContainer?: Flex__<"div">;
};

export interface DefaultCollapsableSectionProps {
  children?: React.ReactNode;
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
  className?: string;
}

const $$ = {};

function PlasmicCollapsableSection__RenderFunc(props: {
  variants: PlasmicCollapsableSection__VariantsArgs;
  args: PlasmicCollapsableSection__ArgsType;
  overrides: PlasmicCollapsableSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isExpanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isExpanded,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
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
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <SectionCollapseButton
        data-plasmic-name={"sectionCollapseButton"}
        data-plasmic-override={overrides.sectionCollapseButton}
        className={classNames("__wab_instance", sty.sectionCollapseButton, {
          [sty.sectionCollapseButtonisExpanded]: hasVariant(
            $state,
            "isExpanded",
            "isExpanded"
          ),
        })}
        isExpanded={
          hasVariant($state, "isExpanded", "isExpanded") ? true : undefined
        }
        onClick={async () => {
          const $steps = {};

          $steps["updateIsExpanded"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "isExpanded",
                  operation: 2,
                  value: "isExpanded",
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateIsExpanded"] != null &&
            typeof $steps["updateIsExpanded"] === "object" &&
            typeof $steps["updateIsExpanded"].then === "function"
          ) {
            $steps["updateIsExpanded"] = await $steps["updateIsExpanded"];
          }
        }}
      />

      <ListSectionSeparator
        className={classNames(
          "__wab_instance",
          sty.listSectionSeparator__xPYnA,
          {
            [sty.listSectionSeparatorisExpanded__xPYnAgCegW]: hasVariant(
              $state,
              "isExpanded",
              "isExpanded"
            ),
          }
        )}
      />

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainerisExpanded]: hasVariant(
            $state,
            "isExpanded",
            "isExpanded"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2OyO6
              )}
            >
              {"Section content here and there and everywhere!!  Yup okay!"}
            </div>
          ),
          value: args.children,
        })}
      </div>
      {(hasVariant($state, "isExpanded", "isExpanded") ? true : false) ? (
        <ListSectionSeparator
          className={classNames(
            "__wab_instance",
            sty.listSectionSeparator__p31HI,
            {
              [sty.listSectionSeparatorisExpanded__p31HIgCegW]: hasVariant(
                $state,
                "isExpanded",
                "isExpanded"
              ),
            }
          )}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sectionCollapseButton", "contentContainer"],
  sectionCollapseButton: ["sectionCollapseButton"],
  contentContainer: ["contentContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sectionCollapseButton: typeof SectionCollapseButton;
  contentContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollapsableSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollapsableSection__VariantsArgs;
    args?: PlasmicCollapsableSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollapsableSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCollapsableSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCollapsableSection__ArgProps,
          internalVariantPropNames: PlasmicCollapsableSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCollapsableSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollapsableSection";
  } else {
    func.displayName = `PlasmicCollapsableSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCollapsableSection = Object.assign(
  // Top-level PlasmicCollapsableSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sectionCollapseButton: makeNodeComponent("sectionCollapseButton"),
    contentContainer: makeNodeComponent("contentContainer"),

    // Metadata about props expected for PlasmicCollapsableSection
    internalVariantProps: PlasmicCollapsableSection__VariantProps,
    internalArgProps: PlasmicCollapsableSection__ArgProps,
  }
);

export default PlasmicCollapsableSection;
/* prettier-ignore-end */
