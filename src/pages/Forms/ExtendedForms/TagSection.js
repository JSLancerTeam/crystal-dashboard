import React, { Component } from 'react';
import Tags from 'components/Tags';

class TagSection extends Component {

  state = {
    tags: [
      {
        id: 1,
        text: 'minimal'
      },
      {
        id: 2,
        text: 'light'
      },
      {
        id: 3,
        text: 'new'
      },
      {
        id: 4,
        text: 'friends'
      }
    ]
  }

  onAdd = tag => {
    let id = new Date().getTime();
    let tags = this.state.tags;
    tags.push({
      id,
      text: tag
    });
    this.setState({
      tags
    });
  }

  onRemove = tagId => {
    let tags = this.state.tags;
    let index = tags.findIndex(tag => tag.id === tagId);
    tags.splice(index, 1);
    this.setState({
      tags
    });
  }

  render() {
    let { tags } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <legend>Tags</legend>
          <p>Regular:</p>
          <Tags
            tags={tags}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
            theme="azure"
            fill />
        </div>
      </div>
    );
  }
}

export default TagSection;