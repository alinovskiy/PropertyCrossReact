import * as React from 'react';

export const WithInfiniteScroll = (Component: React.ComponentType) =>
  class WithInfiniteScroll extends React.Component<any> {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 20 &&
        this.props.hasMore &&
        !this.props.isLoading
      ) {
        this.props.getData();
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  };
