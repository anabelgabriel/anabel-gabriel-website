import * as React from 'react';

export interface GroupProps {
  children?: React.ReactNode;
  onChange: (value: boolean | number | string) => void;
  value: boolean | number | string;
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
    name: React.PropTypes.string,
    selected: React.PropTypes.any,
    onChange: React.PropTypes.func
  };

  public getChildContext = () => ({
    name: this.state.name,
    selected: this.props.value,
    onChange: this.handleChange
  });

  public componentWillMount() {
    this.setState({
      name: randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });
  }

  public handleChange = (value: boolean | number | string) => {
    if (this.props.onChange) this.props.onChange(value);
  };

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
