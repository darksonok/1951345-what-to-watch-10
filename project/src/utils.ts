const huminizaRAting = (rating: number) => {
  switch(true){
    case (rating === 10):
      return 'Best';
    case (rating > 8 && rating < 10):
      return 'Very Good';
    case (rating > 6 && rating <= 8):
      return 'Good';
    case (rating > 4 && rating <= 6):
      return 'Not So Bad';
    case (rating > 2 && rating <= 4):
      return 'Bad';
    case (rating > 0 && rating <= 2):
      return 'Very Bad';
    case (rating === 0):
      return 'Better Go Home';
  }
};

export { huminizaRAting };
