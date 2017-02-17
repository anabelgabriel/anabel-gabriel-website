import * as React from 'react';

export interface GroupProps {
  children?: React.ReactNode;
}

type GroupState = {
  name: string;
};

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

class Group extends React.Component<GroupProps, GroupState> {
  static childContextTypes = {
    name: React.PropTypes.string
  };

  public getChildContext = () => ({
    name: this.state.name
  });

  public componentWillMount() {
    this.setState({
      name: randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });
  }

  public props: GroupProps;
  public state: GroupState = {
    name: null
  };

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Group;
