declare module "instascan-react-native" {
  import { Component } from "react";
  import { ViewProps } from "react-native";

  export namespace InstaScan {
    export interface Props extends ViewProps {
      apiKey: string;
      debugMode: boolean;
      sampleCount: Number;
      minTextHeight: Number;
      guideAreaWidthRatio: Number;
      guideAreaAspectRatio: Number;
      zoomFactor: Number;
      allowedChars: string;
      minDigits: Number;
      maxDigits: Number;
      replaceMap: Object;
      validTextHighlightColor: string;
      invalidTextHighlightColor: string;
      guideTextColor: string;
      guideTextFontName: string;
      guideTextFontSize: string;
      overlayColor: string;
      resolution: Number;

      onPincodeRead?: (event: PincodeEvent) => void;
      onError?: (event: ErrorEvent) => void;
      onLoad?: () => void;
    }

    type Algorithm = Readonly<{
      ACCURATE: any;
      FAST: any;
    }>;

    type FocusRestriction = Readonly<{
      NONE: any;
      NEAR: any;
      FAR: any;
    }>;

    enum Resolution {
      UHD = 1,
      FHD = 2,
      HD = 3,
      VGA = 4,
    }

    export interface Constants {
      Algorithm: Algorithm;
      FocusRestriction: FocusRestriction;
      Resolution: Resolution;
    }

    export interface PincodeEvent {
      pincode: string;
      imagePath: string;
      configuration: Object;
    }

    export interface ErrorEvent {
      code: Number;
      description: string;
    }
  }

  export class InstaScan extends Component<InstaScan.Props> {
    static Constants: Constants;
    getTorchStatus: () => Promise;
    toggleTorch: () => void;
  }
}
