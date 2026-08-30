import {
  Wifi,
  Zap,
  Presentation,
  Armchair,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

import "./AmenitiesPreview.css";

const amenities = [
  {
    icon: Wifi,
    title: "Fast Connectivity",
  },

  {
    icon: Zap,
    title: "Ready to Work",
  },

  {
    icon: Presentation,
    title: "Meeting Spaces",
  },

  {
    icon: Armchair,
    title: "Furnished Comfort",
  },

  {
    icon: ShieldCheck,
    title: "Professional Space",
  },

  {
    icon: Users,
    title: "Community",
  },
];

const AmenitiesPreview = () => {
  return (
    <section
      id="services-preview"
      className="amenitiesPreview"
    >

      <div className="amenitiesPreview__copy">

        <div className="amenitiesPreview__eyebrow">

          <i />

          <strong>
            EVERYTHING YOU NEED
          </strong>

        </div>


        <h2>

          <span>
            Work Without
          </span>

          <span>
            Friction.
          </span>

        </h2>


        <p>
          The essentials are already around you, so your
          attention can stay where it belongs — on your
          work, your ideas and your business.
        </p>


        <a href="/amenities">

          Explore Amenities

          <ArrowRight
            size={18}
          />

        </a>

      </div>


      <div className="amenitiesPreview__orbit">

        <div className="amenitiesPreview__orbitRing amenitiesPreview__orbitRing--outer" />

        <div className="amenitiesPreview__orbitRing amenitiesPreview__orbitRing--inner" />


        <div className="amenitiesPreview__center">

          <small>
            INSIDE
          </small>

          <strong>
            THE HIVE
          </strong>

        </div>


        {amenities.map(
          (
            amenity,
            index
          ) => {
            const Icon =
              amenity.icon;

            return (
              <div
                key={
                  amenity.title
                }
                className={`amenitiesPreview__item amenitiesPreview__item--${index + 1}`}
              >

                <Icon
                  size={25}
                  strokeWidth={1.8}
                />

                <span>
                  {
                    amenity.title
                  }
                </span>

              </div>
            );
          }
        )}

      </div>

    </section>
  );
};

export default AmenitiesPreview;