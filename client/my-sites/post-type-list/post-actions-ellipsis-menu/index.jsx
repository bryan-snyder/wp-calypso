/**
 * External dependencies
 */
import React, { PropTypes, Children, cloneElement } from 'react';

/**
 * Internal dependencies
 */
import EllipsisMenu from 'components/ellipsis-menu';
import PopoverMenuSeparator from 'components/popover/menu-separator';
import PostActionsEllipsisMenuEdit from './edit';
import PostActionsEllipsisMenuPublish from './publish';
import PostActionsEllipsisMenuTrash from './trash';
import PostActionsEllipsisMenuView from './view';
import PostActionsEllipsisMenuRestore from './restore';

export default function PostActionsEllipsisMenu( { globalId, includeDefaultActions, children } ) {
	const actions = [];

	if ( includeDefaultActions ) {
		actions.push(
			<PostActionsEllipsisMenuView key="view" />,
			<PostActionsEllipsisMenuPublish key="publish" />,
			<PostActionsEllipsisMenuEdit key="edit" />,
			<PostActionsEllipsisMenuRestore key="restore" />,
			<PostActionsEllipsisMenuTrash key="trash" />
		);
	}

	children = Children.toArray( children );
	if ( children.length ) {
		actions.push(
			<PopoverMenuSeparator key="separator" />,
			...children
		);
	}

	return (
		<div className="post-actions-ellipsis-menu">
			<EllipsisMenu position="bottom left">
				{ actions.map( ( action ) => cloneElement( action, { globalId } ) ) }
			</EllipsisMenu>
		</div>
	);
}

PostActionsEllipsisMenu.propTypes = {
	globalId: PropTypes.string,
	includeDefaultActions: PropTypes.bool,
	children: PropTypes.node
};

PostActionsEllipsisMenu.defaultProps = {
	includeDefaultActions: true
};
