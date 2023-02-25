import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
    ;
    grid-template-columns: 1fr calc(386px + 16px + 1px) 273px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const StoryList = styled.div`
  --spacing: 16px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  justify-content: space-between;

  & > * + * {
    border-top: 1px solid var(--color-gray-300);
    padding-top: var(--spacing);
  }

  ${OpinionSection} & {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  ${OpinionSection} & > * + * {
    @media ${QUERIES.tabletOnly} {
      border-top: revert;
      padding-top: revert;
    }
  }
`;


const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
