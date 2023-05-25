/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TileCardOverridesProps = {
    TileCard?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<IconProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TileCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TileCardOverridesProps | undefined | null;
}>;
export default function TileCard(props: TileCardProps): React.ReactElement;
