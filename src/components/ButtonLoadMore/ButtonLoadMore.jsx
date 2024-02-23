import React from 'react';
import { StyleLoadMore } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ handlePage }) => {
  return (
    <StyleLoadMore onClick={handlePage} type="button">
      Load more
    </StyleLoadMore>
  );
};
