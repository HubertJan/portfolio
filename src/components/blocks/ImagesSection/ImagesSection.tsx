import { styled } from "goober";
import { Section } from "src/components/elements/Section/Section";
import ImageViewer from 'react-simple-image-viewer';
import { useCallback, useState } from "react";

const ScrollMenu = styled("div")`
    overflow: auto;
    max-width: 100%;
    width: auto;
    scrollbar-width: none; /* for Firefox */
    white-space: nowrap;
    display: inline-block;
    &::-webkit-scrollbar {
        display: none; 
    } 
    margin: auto;
`
/* &::-webkit-scrollbar {
    display: none; 
} */
const CustomSector = styled(Section)`
    padding-left: 0px;
    padding-right: 0px;
`

const Image = styled("img")`
    vertical-align:middle;
    max-width:500px;
    max-height:500px;
    width: auto;
    height: auto; 
    padding-top: 128px; 
    padding-bottom: 128px;
`


export const ImagesSection: React.FC<{
    imageUrls: string[]
}> = ({imageUrls }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <CustomSector>
            <ScrollMenu>
                {imageUrls.map((src, index) => (
                    <Image
                        src={src}
                        onClick={() => openImageViewer(index)}
                        key={index}
                        style={{ margin: '4px' }}
                        alt=""
                    />
                ))}
            </ScrollMenu >
            {
                isViewerOpen && (
                    <ImageViewer
                        src={imageUrls}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )
            }
        </CustomSector >
    );
}