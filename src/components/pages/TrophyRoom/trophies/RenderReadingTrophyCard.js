import React from 'react';
//import { Header } from '../../../common/';
import ReadingTrophyLogic from '../trophies/ReadingTrophyLogic';
import ReadingStarsLogic from '../stars/ReadingStarsLogic';
import '../TrophyCard.less';

import { connect } from 'react-redux';

const RenderReadingTrophyCard = props => {
  const {
    days_count,
    writing_count,
    reading_count,
    drawing_count,
  } = props.student.records;
  console.log(days_count, writing_count, reading_count, drawing_count);

  return (
    <div>
      <div class="outer-div">
        <div class="inner-div">
          <h1>Reading</h1>
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div class="front__face-photo">
              <ReadingTrophyLogic
                className="trophy"
                value={reading_count * 10}
              />
            </div>
            <div class="front__text">
              <h3 class="front__text-header">Stories: {reading_count * 10}</h3>
            </div>
          </div>
          <div class="back">
            <div>
              <h3 class="back__text-header">
                Rack up 5 stars to unlock the next Trophy!
              </h3>
              <ReadingStarsLogic value={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('State in Trophy Room:', state);
  return {
    student: state.childReducer,
    student_id: state.childReducer.student_id,
  };
};

export default connect(mapStateToProps, {})(RenderReadingTrophyCard);