import React from 'react';

let memorizedMovieCount = 0;
const MemoizedMovie = React.memo(function ({title, releaseDate}) {
    ++memorizedMovieCount;

    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div>with memo</div>
            <div>render count: { memorizedMovieCount }</div>
            <div>Movie title: {title}</div>
            <div>Release date: {releaseDate}</div>
        </div>
    );
});

let memoCount = 0;
const Movie = function ({title, releaseDate}) {
    ++memoCount;

    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div>without memo</div>
            <div>render count: { memoCount }</div>
            <div>Movie title: {title}</div>
            <div>Release date: {releaseDate}</div>
        </div>
    );
};

let renderCount = 0;
class MemoComponent extends React.PureComponent {
    state = {
        title: 'title',
        releaseDate: Date.now(),
        counter: 0,
    }

    updateTitle = () => {
        this.setState({
            title: this.state.title + '0',
        })
    }

    updateReleaseDate = () => {
        this.setState({
            releaseDate: Date.now(),
        })
    }

    counterAdd = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        ++renderCount;
        return (
            <div>
                <div>父组件的计数器：{ this.state.counter }</div>
                <div>父组件渲染次数：{ renderCount }</div>
                <Movie title={ this.state.title } releaseDate={ this.state.releaseDate }></Movie>
                <MemoizedMovie title={ this.state.title } releaseDate={ this.state.releaseDate }></MemoizedMovie>
                <button onClick={this.counterAdd}>修改父组件的计数器</button>
                <button onClick={this.updateTitle}>修改title</button>
                <button onClick={this.updateReleaseDate}>修改release date</button>
            </div>
        )
    }
}
  
export default MemoComponent;




