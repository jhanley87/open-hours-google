import { Client } from "@googlemaps/google-maps-services-js";
// Imports global types
import "@twilio-labs/serverless-runtime-types";

// Fetches specific types
import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from "@twilio-labs/serverless-runtime-types/types";

type MyEvent = {
  PlaceId: string;
};

type MyContext = {
  GCP_KEY: string;
};

export const handler: ServerlessFunctionSignature<MyContext, MyEvent> =
  async function (
    context: MyContext,
    event: MyEvent,
    callback: ServerlessCallback
  ) {
    console.log(`Executing is-open`, event);
    try {
      var request = { key: context.GCP_KEY };
      var client = new Client();

      var place = await client.placeDetails({
        params: { ...request, place_id: event.PlaceId },
      });

      console.log(place.data?.result?.opening_hours);
      if (place.data?.result?.opening_hours?.periods) {
        place.data?.result?.opening_hours?.periods.forEach((el) => {
          console.log(el);
        });
      }

      const openHours = place.data?.result?.opening_hours;

      callback(null, { open: openHours });
    } catch (error) {
      console.error("Error executing function", error);
      callback("Error executing funciton", undefined);
    }
  };
