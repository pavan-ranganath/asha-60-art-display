// Styles
import { Flex } from "../../styles/globalStyles";
import {
  Image,
  SinglePictureContainer,
  Back,
  InfoCard,
  Name,
  Category,
  Occassion,
  Avatar,
  Location,
} from "./styles";

// Assets
import images from "../../images";
import { CloseIcon } from "../../images/CustomIcons";

// animation config and variants
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const backVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: { opacity: 1, y: 0 },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  animate: { opacity: 1, y: 0, x: "-50%" },
};

const SinglePicture = ({
  isSelected,
  setSelectedImage,
  index,
  data: { name, location, occassion, category, filename, variant, action },
}) => {
  const goBack = () => {
    setSelectedImage(-1);
  };

  return (
    <SinglePictureContainer
      isSelected={isSelected}
      layoutId={`card-container--index-${index}`}
      transition={spring}
      variant={variant}
    >
      {isSelected && (
        <Back
          onClick={goBack}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={backVariants}
        >
          <CloseIcon />
        </Back>
      )}
      <Image
        src={images[filename]}
        alt={filename}
        onClick={() => {
          setSelectedImage(index);
        }}
        isExpanded={isSelected}
        layoutId={`card-image--index-${index}`}
      />
      {isSelected && (
        <InfoCard
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={cardVariants}
        >
          <Location>{location}</Location>
          <Name>{name}</Name>
          {/* <Flex> */}
          <Category>{category}</Category>
          <Occassion>{occassion}</Occassion>
          {/* <button onClick={action}>More</button> */}
          {/* <PhotographerName>{}</PhotographerName> */}
          {/* </Flex> */}
          <a style={{
            position: "absolute",
            top: "40%",
            right: "10px",
          }} target="_blank" href={action} class="button">More</a>
        </InfoCard>
      )}
    </SinglePictureContainer>
  );
};

export default SinglePicture;
