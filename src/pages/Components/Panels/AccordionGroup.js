import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

const AccordionGroups = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="header">
          <h4 className="title">Collapsible Accordion</h4>
          <p className="category">Bootstrap default style</p>
        </div>
        <div className="content">
          <div className="panel-group" id="accordion">
            <Accordion>
              <Panel header={<span>Collapse item 1<b className="caret"></b></span>} eventKey="1">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Panel>
              <Panel header={<span>Collapse item 1<b className="caret"></b></span>} eventKey="2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Panel>
            </Accordion>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default AccordionGroups;