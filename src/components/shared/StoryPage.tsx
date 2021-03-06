import {
  IC_GRAPHQLSEOUL,
  IC_REACTNATIVESEOUL,
} from '../../utils/Icons';
import React, { ReactElement } from 'react';

import StoryTextButton from '../shared/StoryTextButton';
import ViewMoreRoundButton from '../shared/ViewMoreRoundButton';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
  id?: string;
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoryContainer = styled.div`
  width: 100vw;
  padding: 50px;
  background: ${({ theme }): string => theme.background};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100vw;
  padding: 10px;

  @media ${device.mobileM} {
    padding: 20px;
  }

  @media ${device.mobileL} {
    padding: 30px;
  }

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.laptop} {
    padding: 50px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 90vw;
  line-height: 15px;
  padding: 5px;
  margin-bottom : 20px;
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  
  @media ${device.mobileM} {
    line-height: 20px;
    width: 85vw;
  }

  @media ${device.mobileL} {
    line-height: 25px;
    width: 80vw;
  }

  @media ${device.tablet} {
    line-height: 30px;
    width: 75vw;
  }

  @media ${device.laptop} {
    line-height: 35px;
    width: 70vw;
  }
`;

const ViewMoreButtonWrapper = styled.div`
  width: 100vw;
  margin-right: 10px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const CommunityContainer = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 400px;
  background: ${({ theme }): string => theme.subBackground};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommunityImageListWrapper = styled.div`
  padding: 10px;
  margin-bottom: 50px;
  width: 80vw;
  height: 30vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;

  @media ${device.tablet} {
    margin-bottom: 30px;
    width: 70vw;
    height: 30vw;
  }

  @media ${device.laptop} {
    margin-bottom: 40px;
    width: 60vw;
    height: 25vw;
  }
`;

const GraphQlImageWrapper = styled.div`
  padding: 10px;
  width: 40%;
  background-image: url(${IC_GRAPHQLSEOUL});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ReactNativeImageWrapper = styled.div`
  padding: 10px;
  width: 40%;
  background-image: url(${IC_REACTNATIVESEOUL});
  background-repeat: no-repeat;
  background-size: cover;  

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ItemButtonWrapper = styled.div`
  width: 100vw;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media ${device.tablet} {
    padding: 20px;
    margin-left: 10px;
  }
  
  @media ${device.laptop} {
    padding: 30px;
    margin-left: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 15px;
  font-weight: bold;
  font-family: futura;
  padding: 5px;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.mobileM} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    font-size: 25px;
  }
  
  @media ${device.laptop} {
    font-size: 40px;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-family: avenir;
  padding :5px;
  color: ${({ theme }): string => theme.colorAccentLight};

  @media ${device.mobileM} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    font-size: 25px;
  }

  @media ${device.tablet} {
    font-size: 30px;
  }
  
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

export const BODY2 = styled.text`
  font-size: 12px;
  font-family: avenir;
  font-weight: lighter;
  color: ${({ theme }): string => theme.btnPrimaryLightFont};

  @media ${device.mobileM} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    font-size: 18px;
  }
  
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const NextPageMenubar = styled.div`
  width: 100vw;
  position: relative;
  bottom: 100px;

  @media ${device.tablet} {
    bottom: 70px;
  }  
`;

function Intro(props: Props): ReactElement {
  const { id } = props;
  const history = useHistory();

  const tabChange = (inputPath, pageNumber): void => {
    const location: Record<string, unknown> = {
      pathname: inputPath,
      state: {},
    };
    history.push(location);
    localStorage.setItem('currentPage', pageNumber);
  };

  const moveUrl = (inputPath): void => {
    window.open(inputPath);
  };

  return (
    <Container>
      <StoryContainer>
        <TitleWrapper>
          <H2>{ getString('STORY') }</H2>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('STORY_DESCRIPTION') }</BODY2>
        </DescriptionWrapper>
        <TitleWrapper>
          <H3>{ getString('VISION_MISSION') }</H3>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('VISION_DESCRIPTION') }</BODY2>
          <ViewMoreButtonWrapper>
            <StoryTextButton
              href = {'/vision'}
              onClick={(): void => tabChange('/vision', 6)}
              text={getString('VIEW_MORE2')}/>
          </ViewMoreButtonWrapper>
        </DescriptionWrapper>
      </StoryContainer>
      <CommunityContainer>
        <TitleWrapper>
          <H3>{ getString('COMMUNITY') }</H3>
        </TitleWrapper>
        <DescriptionWrapper>
          <BODY2>{ getString('COMMUNITY_DESCRIPTION') }</BODY2>
        </DescriptionWrapper>
        <CommunityImageListWrapper>
          <ReactNativeImageWrapper>
            <ItemButtonWrapper>
              <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl('https://github.com/react-native-seoul/community-resource ') }/>
            </ItemButtonWrapper>
          </ReactNativeImageWrapper>
          <GraphQlImageWrapper>
            <ItemButtonWrapper>
              <ViewMoreRoundButton
                text={ getString('VIEW_MORE') }
                onClick={ (): void => moveUrl('https://medium.com/graphql-seoul') }/>
            </ItemButtonWrapper>
          </GraphQlImageWrapper>
        </CommunityImageListWrapper>
      </CommunityContainer>
      <NextPageMenubar id={ id }/>
    </Container>
  );
}

export default Intro;
