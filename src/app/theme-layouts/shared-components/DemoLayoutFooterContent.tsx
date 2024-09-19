import PoweredByLinks from './PoweredByLinks';
import DocumentationButton from './DocumentationButton';

/**
 * The demo layout footer content.
 */
function DemoLayoutFooterContent() {
	return (
		<>
			<div className="flex grow shrink-0">
				<DocumentationButton className="mx-4" />
			</div>

			<div className="flex grow shrink-0 px-12 justify-end">
				<PoweredByLinks />
			</div>
		</>
	);
}

export default DemoLayoutFooterContent;
